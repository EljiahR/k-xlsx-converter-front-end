import { useEffect } from "react"

// Sets title for a page and changes it to previous title on unmount
const useTitle = (newTitle: string) => {
    useEffect(() => {
        const previousTitle = document.title;
        document.title = newTitle;

        return () => {document.title = previousTitle};
    }, []);
}

export default useTitle;