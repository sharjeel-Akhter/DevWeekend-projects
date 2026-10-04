const ImageKit = require('@imagekit/nodejs')
// const { tofile } = require('@imagekit/nodejs')
const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})

const uploadFile = async (fileBuffer, fileName) => {
    const result = await imageKit.files.upload({
        file: await fileBuffer.toString("base64"),
        fileName
    })
    console.log(result)
    return result;
}

module.exports = uploadFile