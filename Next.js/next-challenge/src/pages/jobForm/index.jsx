import { Header } from "../../components/header/Header";
import { Footer } from "@/components/footer/Footer";
import { Form } from "@/components/form/Form";
import Head from "next/head";

export const JobForm = () => {
  return (
    <>
      <Head>
        <title>Job Form</title>
      </Head>

      <Header />
      <Form></Form>
      <Footer />
    </>
  );
};

export default JobForm;
