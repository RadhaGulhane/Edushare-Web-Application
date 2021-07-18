import react, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import FileSaver from 'file-saver';
const Post = () =>
{
    // const [posts,setPosts] = useState([{PostNo: 1, Title : "This is title1", Description: "this is description1"},
    //                                     {PostNo: 2, Title : "This is title2", Description: "this is description2"}]);
    // const [posts,setPosts] = useState([]);

    
    // react.useEffect(() => {
    //     fetch("http://localhost:3001/list_1")
    //       .then((res) => res.json())
    //       .then((res) => setPosts(res.posts))
    //       .then((res)=>console.log(res));
          
    //   }, []);

    // const [sortedposts,setSortedposts] = useState(posts);
    // const listposts = sortedposts.map((post)=>
    // <div key = {post.ObjectID}>
    //       {/* <Card className ="mt-4">
    //             <Card.Header>Featured</Card.Header>
    //             <Card.Body>
    //                 <Card.Title>{ post.Title }</Card.Title>
    //                 <Card.Text>
    //                 { post.Description }
    //                 </Card.Text>
    //                 <Button variant="primary">Go somewhere</Button>
    //             </Card.Body>
    //     </Card> */}
    //     <Card className ="mt-4">
    //             <Card.Header>Featured</Card.Header>
    //             <Card.Body>
    //                 <Card.Title>{ post.filename }</Card.Title>
    //                 <Card.Text>
    //                 Year : { post.year }
    //                 Subject : {post.subject}
    //                 Description: { post.description }
    //                 </Card.Text>
    //                 <Button variant="primary">Download</Button>
    //             </Card.Body>
    //     </Card>
    // </div>
      
    // );

    // const handleSearch = (event) =>{
    //     const newpost = [];
    //     posts.map((post)=>{
    //         if (post.Title.includes(event.target.value) || post.Description.includes(event.target.value))
    //         {
    //             newpost.push(post);
    //         }
    //     });
    //     //console.log(event.target.value,newpost);
    //     setSortedposts(newpost);

    // }

    // return(
    //     <div>
    //         <input type="text" onChange={ handleSearch } placeholder="search"/>
    //         {listposts}
    //     </div>
    // );

    const [posts, setPosts] = useState([]); 

    react.useEffect(() => {
        fetch("http://localhost:3001/list_1")
          .then((res) => res.json())
          .then((res) => setPosts(res.posts));

          
      }, []);

      const download_file = async (filename) => {
         
        var url ="http://localhost:3001/download/"+ filename
        console.log("url:", url);
        // const res = await fetch(url);
        // //const blob = await res.blob();
        // //(blob, filename);
        
        // axios.get(
        //     url, { 
        //         // receive two    parameter endpoint url ,form data
        //     })
        //   .then(res => { // then print response status
        //       console.log("Downloaded")
        //    })

        // axios({
        //     method : "GET",
        //     url: "http://localhost:3001/download/"+ filename,
        //     responseType: "blob"
        // }).then(response => {

        // })
        let downloadFilename = filename;

		axios({
			method: "GET",
			url: "http://localhost:3001/download/"+ filename,
			responseType: "blob",
			params: {
				'file' : filename
			}
		}).then(response => {
            /*TODO: Read abt file saver */
            FileSaver.saveAs(response.data, downloadFilename);
				console.log(response);
			// this.setState({ fileDownloading: true }, () => {

			// 	FileSaver.saveAs(response.data, downloadFilename);
			// 	console.log(response);
			// });
		}).then(() => {
			// this.setState({ fileDownloading: false });
			console.log("File Downloading Completed");
		});	

      }
      const listposts = posts.map((post)=>
            <div key = {post.ObjectID}>
                
                <Card className ="mt-4">
                        <Card.Header>Featured</Card.Header>
                        <Card.Body>
                            <Card.Title>{ post.filename }</Card.Title>
                            <Card.Text>
                            Year : { post.year }
                            Subject : {post.subject}
                            Description: { post.description }
                            </Card.Text>
                            <Button variant="primary" onClick= {() => download_file( post.file )}>Download</Button>
                        </Card.Body>
                </Card>
            </div>
    );

    const handleSearch = (event) =>{
            // const newpost = [];
            // posts.map((post)=>{
            //     if (post.Title.includes(event.target.value) || post.Description.includes(event.target.value))
            //     {
            //         newpost.push(post);
            //     }
            // });
            // //console.log(event.target.value,newpost);
            // setSortedposts(newpost);
    
    }
    return(
        <div>
             <input type="text" onChange={ handleSearch } placeholder="search"/>
            {listposts}
        </div>
    )
}

export default Post;