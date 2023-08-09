import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface HeadingProps {
    title: string;
    description: string;
    icon: LucideIcon,
    IconColor?: string;
    bgColor?: string;
}


export const Heading = ({
    title,
    description,
    icon: Icon,
    IconColor,
    bgColor
} : HeadingProps) => {
    return (
        <>
        <div className="px-4 lg:px-8 flex items-center gap-x-3 mb-8">
            <div className={cn("p-2 w-fit rounded-md", bgColor)}>
                    <Icon className={cn("w-10 h-10",IconColor)} />
            </div>
                <div className="text-3xl font-bold">
                    <h2>
                        {title}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {description}  
                    </p>
            </div> 
            </div>
        </>
        
    )
}