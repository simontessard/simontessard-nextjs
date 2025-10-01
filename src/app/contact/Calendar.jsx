"use client";

import Cal, { getCalApi } from "@calcom/embed-react";
import {useEffect, useRef} from "react";
import { gsap } from 'gsap';

export default function Calendar() {
    const refCal = useRef(null);
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"30min"});
            cal("ui", {"hideEventTypeDetails":false,"layout":"month_view", "theme":"light"});
        })();

        gsap.to(refCal.current, {
            opacity: 1,
            duration: 0.7,
            delay: 1.3,
            ease: 'power2.out',
        })
    }, [])
    return (
        <div ref={refCal} className="opacity-0 w-full">
            <Cal namespace="30min"
                 calLink="simon-tessard-3biacz/30min"
                 className="bg-white-primary"
                 style={{width:"100%",height:"100%",overflow:"scroll"}}
                 config={{"layout":"month_view"}}
            />
        </div>
        )
};
