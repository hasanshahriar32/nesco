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
          onload="new formsapp('648995c9071d29cfae4ad022', 'popover', {'button':{'color':'#ff9e24'},'align':'right','autoOpen':{'action':'aftersettime','setTimeSeconds':'5'}});"
        ></script>
      </Helmet>
    </>
  );
};

export default Contact;
