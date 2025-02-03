import RetrieveActus from "@/components/Actus/retrieveActus"
import SecondHeader from "@/components/Header/secondHeader"
import Footer from "@/components/Footer/footer"

export default async function Page({
    params,
  }: {
    params: Promise<{ slug: string }>
  }) {
    const slug = (await params).slug

    return(
        <>
          <SecondHeader />
          <RetrieveActus actuId={slug} />
          <Footer />
        </>
    ) 
  }