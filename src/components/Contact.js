import { Helmet } from "react-helmet";
const Contact = () => {
  return (
    <>
      <Helmet>
        <script
          src="https://forms.app/static/embed.js"
          type="text/javascript"
          async
          defer
          onload="new formsapp('648995c9071d29cfae4ad022', 'sidetab', {'button':{'text':'Contact Me!','color':'#ff9e24'},'align':{'horizontal':'right','vertical':'middle'},'width':'400px','height':'500px'});"
        ></script>
      </Helmet>
    </>
  );
};

export default Contact;
