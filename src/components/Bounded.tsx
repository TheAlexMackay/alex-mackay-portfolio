// import clsx from "clsx"

type BoundedProps = {
    as?: React.ElementType;
    className?: string;
    children: React.ReactNode;
}

export default function Bounded({as: Comp = "section", children, ...restProps}: BoundedProps){

    return (
        <Comp className="px-4 py-10 md:py-12 md:px-6 lg:py-16" {...restProps}>
            <div className="mx-auto w-full max-w-[1440px]">
                {children}
            </div>
        </Comp>
    )
}