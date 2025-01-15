let data = await readFile(src);
        await writeFile(target, data);
        let end = new Date();
        console.log(`Total time taken to copy ${src} to ${target} is ${end - start} ms`);