import React, {useEffect, useState} from 'react';
import {IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@mui/material';
import {Post} from "../types/post";
import {DeleteOutline} from "@mui/icons-material";
import {filterArrayByValue} from "../utils/filter";

interface Props {
    searchText: string
}

const PostsTable = ({searchText}: Props) => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(result => setPosts(result))
            .catch(e => console.log(e))
    }, [])


    const deletePost = (postId: number) => {
        setPosts(posts.filter(post => post.id !== postId));
    };

    return (
        <TableContainer component={Paper} style={{flex: 1, minHeight: 0}}>
            <Table stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell style={{minWidth: 50}}>User ID</TableCell>
                        <TableCell style={{minWidth: 50}}>Post ID</TableCell>
                        <TableCell>Title</TableCell>
                        <TableCell>Body</TableCell>
                        <TableCell/>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {filterArrayByValue(posts, searchText).map((post) => (
                        <TableRow
                            key={post.id}
                        >
                            <TableCell>
                                {post.userId}
                            </TableCell>
                            <TableCell>{post.id}</TableCell>
                            <TableCell>{post.title}</TableCell>
                            <TableCell>{post.body}</TableCell>
                            <TableCell>
                                <IconButton onClick={() => deletePost(post.id)}>
                                    <DeleteOutline color={"error"}/>
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export default PostsTable;
