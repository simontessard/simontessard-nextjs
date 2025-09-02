import pros from '@/data/pros.json';

export default function TwoColumns() {
    return (
        <div className="container grid grid-cols-1 gap-8 md:items-center">
            <Column {...pros.freelance} />
        </div>
    );
}

function Column({ pros}) {
    return (
            <ul className="grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-6 mb-4">
                {pros.map((point, idx) => (
                    <li className="flex max-md:flex-col gap-3 md:gap-4 p-4 md:p-5 xl:p-6
                    text-black bg-white w-full rounded-xl"
                        key={idx}>
                        <p className="w-full md:w-1/3 shrink-0 tracking-tight font-medium font-figtree
                         text-lg xl:text-xl">
                            {point.title}
                        </p>
                        <p className="w-full md:w-2/3 font-figtree tracking-tight font-light md:text-lg">
                          {point.description}
                        </p>
                    </li>
                ))}
            </ul>
    );
}