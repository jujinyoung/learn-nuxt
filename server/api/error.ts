export default eventHandler(() => {
    // return 'Hello Nuxt3!';
    // return {
    //   message: 'Hello Nuxt3!',
    // };
    throw createError({
        statusCode: 404,
        message: '페이지를 찾을 수 없습니다',
    });
});