import { useFormik } from 'formik';

const validate = values => {
   const errors = {};
   if (!values.username) {
     errors.username = 'Username is required';
   } else if (values.username.length > 15) {
     errors.username = 'Must be 15 characters or less';
   }

   if (!values.remarks) {
     errors.remarks = 'Remarks are required';
   } else if (values.remarks.length > 100) {
     errors.remarks = 'Must be 100 characters or less';
   }

   if (!values.ratings) {
     errors.ratings = 'Rating is required';
   } else if (values.ratings < 1 || values.ratings > 5) {
     errors.ratings = 'Must be between 1 and 5';
   }
 
   return errors;
};

export default function CommentsForm({ addNewComment }) {
    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            ratings: 5,
        },
        validate,
        onSubmit: values => {
            console.log(values);
            addNewComment(values);
            formik.resetForm();
            // Show a random joke after submission
            const randomJoke = jokes[Math.floor(Math.random() * jokes.length)];
            alert(randomJoke);
        },
    });

    return (
        <div>
            <h4>Give A Comment!</h4>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor="username">Username : &nbsp;</label>
                <input 
                    placeholder="Your Name" 
                    type="text" 
                    id="username"
                    name="username" 
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.username && formik.errors.username ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.username}</div>
                ) : null}
                <br /> <br />
                
                <label htmlFor="remarks">Remarks : &nbsp;</label>
                <textarea 
                    id="remarks"
                    name="remarks"
                    value={formik.values.remarks}
                    placeholder="Remarks"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.remarks && formik.errors.remarks ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.remarks}</div>
                ) : null}
                <br /> <br />
                
                <label htmlFor="ratings">Ratings : &nbsp;</label>
                <input
                    type="number"
                    id="ratings"
                    name="ratings"
                    min={1}
                    max={5}
                    value={formik.values.ratings}
                    placeholder="Rating (1-5)"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.ratings && formik.errors.ratings ? (
                    <div style={{ color: 'red', fontSize: '12px' }}>{formik.errors.ratings}</div>
                ) : null}
                <br /> <br />
                
                <button type="submit">Add Comment</button>
            </form>
        </div>
    );
}