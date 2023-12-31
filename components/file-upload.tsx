"use client"
 import { X } from "lucide-react";
import Image from "next/image";

import { UploadDropzone } from "@/lib/uploadthing";
import "@uploadthing/react/styles.css"

interface FileUploadProps {
    onChange: (url?: string) => void;
    value: string;
    endpoint: "messageFile" | "serverImage"
}
export const FileUpload = ({
    onChange,
    value,
    endpoint
}: FileUploadProps) => {

    const fileType = value?.split(".").pop();

    if(value && fileType != "pdf") {
        return (
            <div className="relative h-20 w-20">
                <Image
                    alt="Upload"
                    fill
                    src={value}
                    className="rounded -full"
                />
                <button onClick={() => onChange("")} className="bg-rose-500 absolute text-white p-1 rounded-full top-0 right-0 shadow-lg">
                    <X className="h-4 w-4 "/>
                </button>
            </div>
        )
    }
    return (
        <UploadDropzone
         endpoint={endpoint}
         onClientUploadComplete ={(res) => {
            onChange(res?.[0].fileUrl)
         }}
         onUploadError={(error: Error) => {
            console.log(error);
         }}

        />
    )
}