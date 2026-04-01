import { Hero, HomeText, IRSAudit, TaxFilling, BookKeeping, Testimonials, PotraitOne, About, BrickLay, HomeTextTwo } from "@/components";



export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero/>
      <HomeText/>
      <TaxFilling/>
      <IRSAudit/>
      <BookKeeping/>
      <Testimonials/>
      <PotraitOne/>
      <About/>
      <BrickLay/>
      <HomeTextTwo/>
      
    </div>
  );
}
