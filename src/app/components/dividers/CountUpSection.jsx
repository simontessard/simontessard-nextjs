import NumberCard from "@/app/components/dividers/StatCard";
import numbers from '@/data/numbers.json';

export default function CountUpSection() {
    return (
        <section className="bg-gradient-primary py-14 md:py-20">
            <ul className="container flex max-md:flex-col md:justify-between gap-y-10">
                {numbers.map((stat, index) => (
                    <NumberCard key={`${stat.label}-${index}`} stat={stat} index={index} />
                ))}
            </ul>
        </section>
    )
}