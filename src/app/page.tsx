
import { Navbar }    from "@/components/ui/navbar";
import { Hero }       from "@/components/ui/hero";
import { FAQ }        from "@/components/ui/faq";
import { Footer }     from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
