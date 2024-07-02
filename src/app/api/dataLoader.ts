const loader = async (): Promise<HelloWorld> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ hello: "world" });
        }, 1000);
    });
};
export default loader;
