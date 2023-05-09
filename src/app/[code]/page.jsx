"use client"
import { useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { GetData } from '../actions';

const page = () => {

    const router = useRouter();
    const path = usePathname();
    let message_ref = useRef(null);


    useEffect(() => {

        message_ref.current.textContent = "redirecting ..."

        GetData(path.substring(1, path.length)).then((response) => {
            router.replace(response.success)
        }).catch((error) => {
            message_ref.current.textContent = "Invalid URL"
        })

    }, [path])

    return (
        <div ref={message_ref}> redirecting ... </div>
    )
}

export default page
