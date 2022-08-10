import imagemin from "imagemin";
import imageminPngquant from "imagemin-pngquant";
import imageminMozjpeg from "imagemin-mozjpeg";
import imageminSvgo from 'imagemin-svgo';

const compressed = async () => 
{
	const file = await imagemin(["images/*.{png,jpeg,jpg,svg}"], { // ["images/*.{png}"
		destination: "compressed-image",
		plugins: [
			imageminMozjpeg({quality: 40}),
			imageminPngquant({
				quality: [0, 0]
			}),
			imageminSvgo({
				plugins: [{
					name: 'removeViewBox',
					active: false
				}]
			}),
		
		]
	});
	console.log(file);
}
compressed();
