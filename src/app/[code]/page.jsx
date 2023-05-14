"use client"
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { GetData } from '../actions';

const page = ({ params: { code } }) => {

    const router = useRouter();
    let message_ref = useRef(null);

    useEffect(() => {

        message_ref.current.textContent = "redirecting ..."

        GetData(code).then((response) => {
            router.replace(response.success)
        }).catch((error) => {
            message_ref.current.textContent = "Invalid URL"
        })

    }, [code])

    return (
        <div ref={message_ref}> redirecting ... </div>
    )
}

export default page
