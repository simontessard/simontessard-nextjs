import NumberCard from "@/app/common/dividers/StatCard";
import numbers from '@/data/numbers.json';

export default function CountUpSection() {
    return (
        <section style={{backgroundImage: "url(/cta.png)"}} className="bg-cover bg-center py-14">
            <ul className="container flex max-md:flex-col md:justify-between gap-y-10">
                {numbers.map((stat, index) => (
                    <NumberCard key={`${stat.label}-${index}`} stat={stat} index={index} />
                ))}
            </ul>
        </section>
    )
}