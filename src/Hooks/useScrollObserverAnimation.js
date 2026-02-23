import { useEffect, useRef, useState } from "react"


function useScrollObserverAnimation() {
    const ref = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const scrollTimeout = useRef(null);
    const isScrolling = useRef(false);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];

                if (isScrolling.current) return;

                if (entry.isIntersecting) {
                    setIsVisible(true);

                    // Limpa timeout anterior
                    if (scrollTimeout.current) clearTimeout(scrollTimeout.current);

                    scrollTimeout.current = setTimeout(() => {
                        isScrolling.current = true; 

                        const rect = element.getBoundingClientRect();

                        const absoluteElementTop = rect.top + window.scrollY;

                        const offset =  window.innerHeight * 0.1;

                        const centerPosition =
                        absoluteElementTop -
                        
                        offset;

                        window.scrollTo({
                            top: centerPosition,
                            behavior: "smooth",
                        });

                        
                        setTimeout(() => {
                            isScrolling.current = false;
                        }, 1000); 
                    }, 100);
                } else {
                    setIsVisible(false);
                    
                }
            },
            {
                threshold: 0.2,
                rootMargin: "0px"
                
            }
        );

        observer.observe(element);

        return () => {
            observer.disconnect();
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);
    return { ref, isVisible}
}

export default useScrollObserverAnimation