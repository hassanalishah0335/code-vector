import React from 'react'
import Link from 'next/link'

const LastCard = (props) => {
    return (
            <div class="my-10 flex flex-col">
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50 font-bold pb-5">{props.t1}</Link>
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t2}</Link>
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t3}</Link>
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t4}</Link>
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t5}</Link>
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t6}</Link>
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t7}</Link>
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t8}</Link>
                <Link href={props.reff} class="text-gray-300 text-left hover:opacity-70 active:opacity-50">{props.t9}</Link>

            </div>
    )
}

export default LastCard
