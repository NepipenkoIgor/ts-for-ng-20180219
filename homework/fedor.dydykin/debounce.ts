export function debounce(ms: number) {
    return (target: any, methodName: string, descriptor: PropertyDescriptor) => {
        let isFirstTime: boolean = true;
        let timer: number | null = null;
        let result: any = null;
        return {
            ...descriptor,
            value(...args: any[]) {
                const onComplete = () => {
                    result = descriptor.value.apply(this, args);
                    timer = null;
                };
                if (timer) {
                    clearTimeout(timer);
                }
                if (isFirstTime) {
                    result = descriptor.value.apply(this, args);
                    isFirstTime = false;
                } else {
                    timer = setTimeout(onComplete, ms);
                }
                return result;
            },
        };
    };
}

