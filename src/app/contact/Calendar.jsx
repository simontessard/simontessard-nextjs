import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

export default function Calendar() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({"namespace":"30min"});
            cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
        })();
    }, [])
    return <Cal namespace="30min"
                calLink="simon-tessard-3biacz/30min"
                className="bg-black-primary"
                style={{width:"100%",height:"100%",overflow:"scroll"}}
                config={{"layout":"month_view"}}
    />;
};
