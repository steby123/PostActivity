import { Link, Form, redirect } from 'react-router-dom';
import classes from './NewPost.module.css';
import Modal from '../components/Modal';

function NewPost() {

  return (
    <Modal>
      <Form method='post' className={classes.form} >
        <p>
          <label htmlFor="body">Text</label>
          <textarea 
            id="body" 
            name='body' 
            required 
            rows={3}     
          />
        </p>
        <p>
          <label htmlFor="name">Your name</label>
          <input 
            type="text" 
            id="name" 
            name='author' 
            required              
          />
        </p>
        <p className={classes.actions}>
          <Link to="/" type='button'>Cancel</Link>
          <button>submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({request}) {
  const formData = await request.formData();
  const PostData = Object.fromEntries(formData);
  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(PostData),
    headers: {
      'Content-Type': 'application/json',
    }
  });    

  return redirect('/');
}