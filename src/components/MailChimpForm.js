import { NewsLetter } from "./NewsLetter";
import MailchimpSubscribe from "react-mailchimp-subscribe"


export const MailChimpForm = () => {
 const postUrl =`${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}$id=${process.env.REACT_APP_MAILCHIMP_ID}`;

return (
    <>
     <MailchimpSubscribe
      url={postUrl}
      render={({subscribe, status, message}) =>(
        <NewsLetter 
        status={status}
        message={message}
        onValidated={formData => subscribe(formData)}
        />
      )}
     />    
    </>
)
}



