// Generated by Haxe TypeScript Declaration Generator :)

export namespace bitmap {
	export interface RectangleArea {
		width: number;
		height: number;
	}
}

export namespace bitmap {
	export interface OffsetRectangleArea {
		originalWidth: number;
		originalHeight: number;
	}
}

export namespace haxe.io {
	export class Bytes {
		private constructor(data: ArrayBuffer);
		readonly length: number;
		blit(pos: number, src: haxe.io.Bytes, srcpos: number, len: number): void;
		fill(pos: number, len: number, value: number): void;
		sub(pos: number, len: number): haxe.io.Bytes;
		compare(other: haxe.io.Bytes): number;
		/**
		 * Returns the 32 bit integer at given position (in low endian encoding).
		 */
		getInt32(pos: number): number;
		/**
		 * Store the 32 bit integer at given position (in low endian encoding).
		 */
		setInt32(pos: number, v: number): void;
		getString(pos: number, len: number, encoding?: any): string;
		/**
		 * Returns string representation of the bytes as UTF8
		 */
		toString(): string;
		/**
		 * Returns bytes representation of the given String, using specific encoding (UTF-8 by default)
		 */
		static ofString(s: string, encoding?: any): haxe.io.Bytes;
		static ofData(b: ArrayBuffer): haxe.io.Bytes;
	}
}

export namespace bitmap.transformation {
	export type PixelizeOptions = {
		/**
		 * If provided, it will blend rectangles with averge color on top of resulting pixels, with given alpha.
		 */
		alpha: number;
		bitmap: bitmap.Bitmap;
		blend: bitmap.ColorBlend;
		height: number;
		output: bitmap.Bitmap;
		region: bitmap.Rectangle;
		width: number;
	}
}

export namespace bitmap.transformation {
	export type ConvolveOptions = {
		bias: number;
		bitmap: bitmap.Bitmap;
		factor: number;
		kernel: number[][];
		output: bitmap.Bitmap;
		region: bitmap.Rectangle;
	}
}

export namespace bitmap.transformation {
	/**
	 * 2D transformation matrix object initialized with identity matrix.
	 *
	 * The matrix can synchronize a canvas context by supplying the context
	 * as an argument, or later apply current absolute transform to an
	 * existing context.
	 */
	export type AffineMatrix = {
		/**
		 * scale x
		 */
		a: number;
		/**
		 * skew y
		 */
		b: number;
		/**
		 * skew x
		 */
		c: number;
		/**
		 * scale y
		 */
		d: number;
		/**
		 * translate x
		 */
		e: number;
		/**
		 * translate y
		 */
		f: number;
	}
}

export namespace bitmap.transformation {
	/**
	 * 2D transformation matrix object initialized with identity matrix.
	 *
	 * The matrix can synchronize a canvas context by supplying the context
	 * as an argument, or later apply current absolute transform to an
	 * existing context.
	 */
	export class Affine {
		constructor();
		/**
		 * scale x
		 */
		a: number;
		/**
		 * skew y
		 */
		b: number;
		/**
		 * skew x
		 */
		c: number;
		/**
		 * scale y
		 */
		d: number;
		/**
		 * translate x
		 */
		e: number;
		/**
		 * translate y
		 */
		f: number;
		/**
		 * Apply current matrix to x and y point.
		 * Returns a point object.
		 *
		 * @param  x - value for x
		 * @param  y - value for y
		 * @returns  A new transformed point object
		 */
		applyToPoint(x: number, y: number): {x: number, y: number};
		transform(o: bitmap.transformation.AffineOptions): {affine: bitmap.transformation.Affine, bitmap: bitmap.Bitmap};
		/**
		 * Multiplies current matrix with new matrix values.
		 */
		transformMatrix(a2: number, b2: number, c2: number, d2: number, e2: number, f2: number): bitmap.transformation.Affine;
		/**
		 * Assign this affine to given matrix.
		 */
		assign(m: bitmap.transformation.AffineMatrix): bitmap.transformation.Affine;
		getMatrix(): {a: number, b: number, c: number, d: number, e: number, f: number};
		/**
		 * Returns true if matrix is an identity matrix (no transforms applied).
		 * @returns True if identity (not transformed)
		 */
		isIdentity(): boolean;
		/**
		 * Interpolate this matrix with another and produce a new matrix.
		 * t is a value in the range [0.0, 1.0] where 0 is this instance and
		 * 1 is equal to the second matrix. The t value is not constrained.
		 *
		 * Context from parent matrix is not applied to the returned matrix.
		 *
		 * @param m2 - the matrix to interpolate with.
		 * @param  t - interpolation [0.0, 1.0]
		 * @returns   - new instance with the interpolated result
		 */
		interpolate(m2: bitmap.transformation.AffineMatrix, t: number): bitmap.transformation.AffineMatrix;
		/**
		 * Rotates current matrix accumulative by angle.
		 * @param angle - angle in radians
		 */
		rotate(angle: number): bitmap.transformation.Affine;
		/**
		 * Helper method to make a rotation based on an angle in degrees.
		 * @param  angle - angle in degrees
		 */
		rotateDeg(angle: number): bitmap.transformation.Affine;
		/**
		 * Translate current matrix accumulative.
		 * @param tx - translation for x
		 * @param ty - translation for y
		 */
		translate(tx: number, ty: number): bitmap.transformation.Affine;
		/**
		 * Translate current matrix on x axis accumulative.
		 * @param tx - translation for x
		 */
		translateX(tx: number): bitmap.transformation.Affine;
		/**
		 * Translate current matrix on y axis accumulative.
		 * @param ty - translation for y
		 */
		translateY(ty: number): bitmap.transformation.Affine;
		/**
		 * Flips the vertical values.
		 */
		flipY(): bitmap.transformation.Affine;
		/**
		 * Flips the horizontal values.
		 */
		flipX(): bitmap.transformation.Affine;
		/**
		 * Scales current matrix accumulative.
		 * @param sx - scale factor x (1 does nothing)
		 * @param sy - scale factor y (1 does nothing)
		 */
		scale(sx: number, sy: number): bitmap.transformation.Affine;
		/**
		 * Scales current matrix on x axis accumulative.
		 * @param sx - scale factor x (1 does nothing)
		 */
		scaleX(sx: number): bitmap.transformation.Affine;
		/**
		 * Scales current matrix on y axis accumulative.
		 * @param sy - scale factor y (1 does nothing)
		 */
		scaleY(sy: number): bitmap.transformation.Affine;
		/**
		 * Apply skew to the current matrix accumulative.
		 * @param sx - amount of skew for x
		 * @param sy - amount of skew for y
		 */
		skew(sx: number, sy: number): bitmap.transformation.Affine;
		/**
		 * Apply skew for x to the current matrix accumulative.
		 * @param sx - amount of skew for x
		 */
		skewX(sx: number): bitmap.transformation.Affine;
		/**
		 * Apply skew for y to the current matrix accumulative.
		 * @param sy - amount of skew for y
		 */
		skewY(sy: number): bitmap.transformation.Affine;
		/**
		 * Apply current matrix to array with point objects or point pairs.
		 * Returns a new array with points in the same format as the input array.
		 *
		 * A point object is an object literal:
		 *
		 * {x: x, y: y}
		 *
		 * so an array would contain either:
		 *
		 * [{x: x1, y: y1} {x: x2, y: y2} ... {x: xn, y: yn}]
		 *
		 * or
		 * [x1, y1, x2, y2, ... xn, yn]
		 *
		 * @param points - array with point objects or pairs
		 * @returns  A new array with transformed points
		 */
		applyToPoints(points: bitmap.FloatPoint[]): bitmap.FloatPoint[];
		/**
		 * Apply current matrix to a typed array with point pairs. Although
		 * the input array may be an ordinary array, this method is intended
		 * for more performant use where typed arrays are used. The returned
		 * array is regardless always returned as a UInt16Array.
		 *
		 * @param   points   array with point pairs
		 * @returns A new array with transformed points
		 */
		applyToArray(points: Int32Array): Int32Array;
		static identity(): {a: number, b: number, c: number, d: number, e: number, f: number};
	}
}

export namespace bitmap.transformation {
	export type AffineOptions = {
		affine: bitmap.transformation.Affine;
		bg: any;
		bitmap: bitmap.Bitmap;
		matrix: bitmap.transformation.AffineMatrix;
		output: bitmap.Bitmap;
		precision: boolean;
		region: bitmap.Rectangle;
	}
}

export namespace bitmap.transformation {
	export class Transform {
		constructor(b: bitmap.Bitmap);
		pixelize(t: bitmap.transformation.PixelizeOptions): bitmap.Bitmap;
		convolve(t: bitmap.transformation.ConvolveOptions): bitmap.Bitmap;
		affine(t: bitmap.transformation.AffineOptions): {affine: bitmap.transformation.Affine, bitmap: bitmap.Bitmap};
	}
}

export namespace haxe.io {
	/**
	 * An Input is an abstract reader. See other classes in the `haxe.io` package
	 * for several possible implementations.
	 * All functions which read data throw `Eof` when the end of the stream
	 * is reached.
	 */
	export class Input {
		private constructor();
		/**
		 * Endianness (word byte order) used when reading numbers.
		 * If `true`, big-endian is used, otherwise `little-endian` is used.
		 */
		readonly bigEndian: boolean;
		/**
		 * Read and return one byte.
		 */
		readByte(): number;
		/**
		 * Read `len` bytes and write them into `s` to the position specified by `pos`.
		 * Returns the actual length of read data that can be smaller than `len`.
		 * See `readFullBytes` that tries to read the exact amount of specified bytes.
		 */
		readBytes(s: haxe.io.Bytes, pos: number, len: number): number;
		set_bigEndian(b: boolean): boolean;
		/**
		 * Read and return all available data.
		 * The `bufsize` optional argument specifies the size of chunks by
		 * which data is read. Its default value is target-specific.
		 */
		readAll(bufsize: number): haxe.io.Bytes;
		/**
		 * Read `len` bytes and write them into `s` to the position specified by `pos`.
		 * Unlike `readBytes`, this method tries to read the exact `len` amount of bytes.
		 */
		readFullBytes(s: haxe.io.Bytes, pos: number, len: number): void;
		/**
		 * Read and return `nbytes` bytes.
		 */
		read(nbytes: number): haxe.io.Bytes;
		/**
		 * Read a 16-bit unsigned integer.
		 * Endianness is specified by the `bigEndian` property.
		 */
		readUInt16(): number;
		/**
		 * Read a 32-bit signed integer.
		 * Endianness is specified by the `bigEndian` property.
		 */
		readInt32(): number;
		/**
		 * Read and `len` bytes as a string.
		 */
		readString(len: number, encoding?: any): string;
	}
}

export namespace haxe.io {
	/**
	 * An Output is an abstract write. A specific output implementation will only
	 * have to override the `writeByte` and maybe the `write`, `flush` and `close`
	 * methods. See `File.write` and `String.write` for two ways of creating an
	 * Output.
	 */
	export class Output {
		private constructor();
		/**
		 * Endianness (word byte order) used when writing numbers.
		 * If `true`, big-endian is used, otherwise `little-endian` is used.
		 */
		readonly bigEndian: boolean;
		/**
		 * Write one byte.
		 */
		writeByte(c: number): void;
		/**
		 * Write `len` bytes from `s` starting by position specified by `pos`.
		 * Returns the actual length of written data that can differ from `len`.
		 * See `writeFullBytes` that tries to write the exact amount of specified bytes.
		 */
		writeBytes(s: haxe.io.Bytes, pos: number, len: number): number;
		set_bigEndian(b: boolean): boolean;
		/**
		 * Write all bytes stored in `s`.
		 */
		write(s: haxe.io.Bytes): void;
		/**
		 * Write `len` bytes from `s` starting by position specified by `pos`.
		 * Unlike `writeBytes`, this method tries to write the exact `len` amount of bytes.
		 */
		writeFullBytes(s: haxe.io.Bytes, pos: number, len: number): void;
		/**
		 * Write `x` as 32-bit signed integer.
		 * Endianness is specified by the `bigEndian` property.
		 */
		writeInt32(x: number): void;
		/**
		 * Write `s` string.
		 */
		writeString(s: string, encoding?: any): void;
	}
}

export namespace bitmap {
	export interface Bitmap {
		/**
		 * image bitmap Raw bytes in RGBA int32 format.
		 */
		data: haxe.io.Bytes;
		/**
		 * If true operationsn won't throw exceptions in case given coordinates for get/set are outside bitmap.
		 */
		noRangeCheck: boolean;
		/**
		 * Drawing utilities.
		 */
		draw: bitmap.Draw;
		/**
		 * Color related utilities like channel filters, blend, etc.
		 */
		color: bitmap.transformation.Colors;
		/**
		 * Transform utilities like convolve, affine, etc.
		 */
		transform: bitmap.transformation.Transform;
		/**
		 * Utilities to load/save bitmaps from/to other formats or resources, such as base64 dataUrls, raw bytes formats, HTML canvas, HTML images, DOM Blobs, TypedArrays, buffers, urls, etc.
		 */
		io: bitmap.BitmapIO;
		/**
		 * Default color for this bitmap background. It's used in some operations like copy/clone as default background color in some cases.
		 */
		bg: bitmap.Color;
		/**
		 * Loads an image form given input.
		 */
		load(input: haxe.io.Input, format?: any): void;
		/**
		 * Saves current bitmap to given output.
		 */
		save(output: haxe.io.Output): void;
		/**
		 * Gets pixel color at x,y.
		 *
		 * By default if coords are out of bounds it will throw error. This can be prevented
		 * passing noError==true. In that case, if the error happens it will return true, otherwise false.
		 */
		get(x: number, y: number, noError?: boolean): bitmap.Color;
		/**
		 * By default if coords are out of bounds it will throw error. This can be prevented
		 * passing noError==true. In that case, if the error happens it will return true, otherwise false.
		 */
		set(x: number, y: number, c: bitmap.Color, noError?: boolean): boolean;
		/**
		 * Returns true if this bitmap and given one are exactly equal (pixel by pixel).
		 */
		equals(b: bitmap.Bitmap, region?: bitmap.Rectangle): boolean;
		/**
		 * Returns a new bitmap that is a copy of this one with exactly the same pixels.
		 */
		clone(fillBg: boolean): bitmap.Bitmap;
		/**
		 * Writes in this bitmap given region of given bitmap, or if no region is given, the bitmap entirely.
		 */
		copyFrom(b: bitmap.Bitmap, bCoords: bitmap.Point, regionThis: bitmap.Rectangle): void;
		fill(bg: bitmap.Color): void;
		copy(r: bitmap.Rectangle): bitmap.Bitmap;
		compare(b: bitmap.Bitmap, regionA?: bitmap.Rectangle, thisRegion?: bitmap.Rectangle): number;
		bounds(): bitmap.Rectangle;
	}
}

export namespace bitmap {
	export class AbstractBitmap {
		constructor(w: number, h?: number, f?: any);
		noRangeCheck: boolean;
		/**
		 * Switch between byte-by-byte and int32 modalities for reading and writing pixels with get/set.
		 */
		int32Mode: boolean;
		data: haxe.io.Bytes;
		width: number;
		height: number;
		originalWidth: number;
		originalHeight: number;
		format: any;
		draw: bitmap.Draw;
		io: bitmap.BitmapIO;
		color: bitmap.transformation.Colors;
		transform: bitmap.transformation.Transform;
		bg: bitmap.Color;
		fill(bg_: bitmap.Color): void;
		get(x: number, y: number, noError?: boolean): bitmap.Color;
		toString(): string;
		byteIndex(x: number, y: number): number;
		copy(r: bitmap.Rectangle): bitmap.Bitmap;
		set(x: number, y: number, c: bitmap.Color, noError?: boolean): boolean;
		load(input: haxe.io.Input, f?: any): void;
		save(output: haxe.io.Output): void;
		clone(fill_: boolean): bitmap.PNGBitmap;
		equals(b: bitmap.Bitmap, region?: bitmap.Rectangle): boolean;
		copyFrom(b: bitmap.Bitmap, bCoords: bitmap.Point, regionThis: bitmap.Rectangle): void;
		compare(b: bitmap.Bitmap, regionB?: bitmap.Rectangle, thisRegion?: bitmap.Rectangle): number;
		bounds(): bitmap.Rectangle;
	}
}

export namespace bitmap {
	/**
	 * Utilities to load/save bitmaps from/to other formats or resources, such as base64 dataUrls, raw bytes formats, HTML canvas, HTML images, DOM Blobs, TypedArrays, buffers, urls, etc.
	 */
	export class BitmapIO {
		constructor(b: bitmap.Bitmap);
		/**
		 * Creates a DataUrl like `data:image/png;name=f.png;base64,` using given base64 content, mimeType and fileName.
		 */
		toDataUrl(mime: string, name?: string): string;
		/**
		 * Returns base64 representation of this image in an ecoded format like PNG
		 */
		toBase64(): string;
		/**
		 * Loads bitmap from given base64 string.
		 */
		fromBase64(base64: string): bitmap.Bitmap;
		/**
		 * Loads bitmap from given data url string.
		 */
		fromDataUrl(dataurl: string): bitmap.Bitmap;
		/**
		 * Loads bitmaps from files in html input element of type "file"
		 */
		static readHtmlInputFile(el: HTMLInputElement): Promise<bitmap.Bitmap[]>;
		static writeBitmap(file: string, bitmap: bitmap.Bitmap): void;
	}
}

export namespace bitmap {
	export class BitmapUtil {
		private constructor();
		static bitmapEquals(a: bitmap.Bitmap, b: bitmap.Bitmap, region?: bitmap.Rectangle): boolean;
		/**
		 * Compares given region of given Bitmaps. Returns a number between -1 and 1, the biger its absolute value the bigger the difference. If negative it means the sum of a's bytes is bigger than b's, possitive otherwise.
		 * TODO : fix this is not working fine
		 */
		static compare(a: bitmap.Bitmap, b: bitmap.Bitmap, regionA?: bitmap.Rectangle, regionB?: bitmap.Rectangle): number;
		static blend(b1: bitmap.Bitmap, b2: bitmap.Bitmap, b3: bitmap.Bitmap, blend?: bitmap.ColorBlend): bitmap.Bitmap;
		/**
		 * Creates a DataUrl like `data:image/png;name=f.png;base64,` using given base64 content, mimeType and fileName.
		 */
		static toDataUrl(bitmap: bitmap.Bitmap, mime?: string, name?: string): string;
		/**
		 * Returns base64 representation of this image in an ecoded format like PNG
		 */
		static toBase64(bitmap: bitmap.Bitmap): string;
		/**
		 * Loads bitmap from given base64 string.
		 */
		static fromBase64(base64: string, bitmap?: bitmap.Bitmap): bitmap.Bitmap;
		/**
		 * Loads bitmap from given data url string.
		 */
		static fromDataUrl(dataurl: string, bitmap?: bitmap.Bitmap): bitmap.Bitmap;
	}
}

export namespace bitmap._Color {
	export class Color_Impl_ {
		private constructor();
		/**
		 * Red color component.
		 */
		/**
		 * Green color component.
		 */
		/**
		 * Blue color component.
		 */
		/**
		 * Alpha color component.
		 */
		/**
		 * Creates a new color.
		 * @param	rgba	The color value. It will be interpreted in RGBA8888 format.
		 */
		static _new(rgba: number): bitmap.Color;
		/**
		 * Creates a new color.
		 * @param	red	The red component (0-255).
		 * @param	green	The green component (0-255).
		 * @param	blue	The blue component (0-255).
		 * @param	alpha	The alpha component (0-255).
		 * @return	The new color value in RGBA8888 format.
		 */
		static create(red: number, green: number, blue: number, alpha: number): bitmap.Color;
		static fromString(s: string): bitmap.Color;
		/**
		 * Converts an integer to a RGBA8888 color.
		 * @param	rgba The integer to convert to the color.
		 * @return	The RGBA color.
		 */
		static fromInt(rgba: number): bitmap.Color;
		static toString(this: number): string;
		static get_r(this: number): number;
		static get_g(this: number): number;
		static get_b(this: number): number;
		static get_a(this: number): number;
		static set_r(this: number, value: number): number;
		static set_g(this: number, value: number): number;
		static set_b(this: number, value: number): number;
		static set_a(this: number, value: number): number;
	}
}

export namespace bitmap {
	/**
	 * Applies a linear transformation (a * value + c) on each channel (red, green, blue, alpha) .
	 */
	export type ColorFilter = {
		alpha: bitmap.ColorFilterChannel;
		blend: bitmap.ColorBlend;
		blue: bitmap.ColorFilterChannel;
		/**
		 * filter declarations by providing a function `fn` that transform colors to colors
		 */
		fn: (c: bitmap.Color, o?: bitmap.ColorFilter) => bitmap.Color;
		green: bitmap.ColorFilterChannel;
		red: bitmap.ColorFilterChannel;
		x: number;
		y: number;
	}
}

export namespace bitmap {
	/**
	 * Linear transformation on channels (a * value + c).
	 */
	export type ColorFilterChannel = {
		a: number;
		c: number;
	}
}

export namespace bitmap {
	export class ColorUtil {
		private constructor();
		mix(c1: bitmap.Color, c2: bitmap.Color, strength: number): bitmap.Color;
		static colorEquals(a: bitmap.Color, b: bitmap.Color): boolean;
		/**
		 * Computes the average RGB color of the pixels in the image.
		 * @param	image	The image whose average color will be calculated.
		 * @param	alpha	The opacity of the image (0-255), defaults to opaque (255).
		 * @return	The average RGB color of the image, RGBA8888 format. Alpha defaults to opaque (255).
		 */
		static average(image: bitmap.Bitmap, region?: bitmap.Rectangle, alpha?: number): bitmap.Color;
		static random(alpha: number): bitmap.Color;
		static randomGray(alpha: number): bitmap.Color;
		/**
		 * Applies a linear transformation (a * value + c) on each channel (red, green, blue, alpha) .
		 */
		static blendColors(c1: bitmap.Color, c2: bitmap.Color, blend?: bitmap.ColorBlend): bitmap.Color;
		/**
		 * Supports filter declarations by providing a function `fn` that transform colors to colors, or if not given, alternatively it supports providing 1-grade equation coeficients to transform each channel linearly (red*a+c).
		 */
		static filter(c: bitmap.Color, o: bitmap.ColorFilter): bitmap.Color;
	}
}

export namespace bitmap {
	export type DrawShape = {
		blend: bitmap.ColorBlend;
		c: bitmap.Color;
		fill: boolean;
		x: number;
		y: number;
	}
}

export namespace bitmap {
	export type LineShape = {
		blend: bitmap.ColorBlend;
		c: bitmap.Color;
		fill: boolean;
		x: number;
		x2: number;
		y: number;
		y2: number;
	}
}

export namespace bitmap {
	export type RectangleShape = {
		blend: bitmap.ColorBlend;
		c: bitmap.Color;
		fill: boolean;
		height: number;
		width: number;
		x: number;
		y: number;
	}
}

export namespace bitmap {
	export class Draw {
		constructor(b: bitmap.Bitmap);
		/**
		 * adapted from http://www.brackeen.com/vga/source/djgpp20/lines.c.html
		 */
		line(x1: number, y1: number, x2: number, y2: number, c: bitmap.Color, blend?: bitmap.ColorBlend, returnPoints?: boolean): bitmap.Point[];
		rectangle(r: bitmap.RectangleShape): void;
		rectangle2(x: number, y: number, width: number, height: number, c: bitmap.Color, fill?: boolean, blend?: bitmap.ColorBlend): void;
		triangle(x1: number, y1: number, x2: number, y2: number, x3: number, y3: number, c: bitmap.Color, fill?: boolean, blend?: bitmap.ColorBlend): void;
		set(x: number, y: number, c: bitmap.Color, blend?: bitmap.ColorBlend): void;
	}
}

export namespace bitmap {
	export type ExecResult = {
		code: number;
		stderr: string;
		stdout: string;
	}
}

export namespace haxe.io {
	export class BytesInput {
		constructor(b: haxe.io.Bytes, pos?: number, len?: number);
		/**
		 * The current position in the stream in bytes.
		 */
		readonly position: number;
		/**
		 * The length of the stream in bytes.
		 */
		readonly length: number;
		readByte(): number;
		readBytes(buf: haxe.io.Bytes, pos: number, len: number): number;
	}
}

export namespace bitmap {
	export class IOUtil {
		private constructor();
		static fetch(url: string, cb: (error: any, data: haxe.io.BytesInput) => void): void;
		static fetchResource(url: string, cb: (error: any, data: ArrayBuffer) => void): void;
		static readFile(path: string): haxe.io.Input;
		static args(): string[];
		static exit(code: number): any;
		static readTextFile(path: string): string;
		static writeFile(file: string, input: haxe.io.Input): void;
		static writeTextFile(path: string, s: string): void;
	}
}

export namespace bitmap {
	export class PNGBitmap extends AbstractBitmap{
		constructor(w: number, h?: number, f?: any);
		load(input: haxe.io.Input, f?: any): void;
		save(output: haxe.io.Output): void;
		copy(r: bitmap.Rectangle): bitmap.Bitmap;
		static create(input: haxe.io.Input, format?: any): bitmap.PNGBitmap;
	}
}

export namespace bitmap {
	export type ColorBlend = {
		factor: number;
		type: any;
	}
}

export namespace bitmap {
	export type Point = {
		x: number;
		y: number;
	}
}

export namespace bitmap {
	export type FloatPoint = {
		x: number;
		y: number;
	}
}

export namespace bitmap {
	export type Area = {
		height: number;
		width: number;
	}
}

export namespace bitmap {
	export type OptionalArea = {
		height: number;
		width: number;
	}
}

export namespace bitmap {
	export type Rectangle = {
		height: number;
		width: number;
		x: number;
		y: number;
	}
}

export namespace bitmap {
	/**
	 * Utility functions.
	 * Adapted from https://github.com/Tw1ddle/geometrize-haxe/
	 */
	export class Util {
		private constructor();
		/**
		 * Clamps a value within a range.
		 * @param	value	The value to clamp.
		 * @param	min	The lower bound of the range.
		 * @param	max	The upper bound of the range.
		 * @return	The clamped value.
		 */
		static clamp(value: number, min: number, max: number): number;
		static printRectangle(r: bitmap.Rectangle): string;
		/**
		 * Compares two values and returns the smaller one.
		 * @param	first	The first value.
		 * @param	second	The second value.
		 * @return	The smaller value.
		 */
		static min(first: number, second: number): number;
		/**
		 * Compare two values and returns the larger one.
		 * @param	first	The first value.
		 * @param	second	The second value.
		 * @return	The larger value.
		 */
		static max(first: number, second: number): number;
		/**
		 * Returns the absolute value of the given value.
		 * @param	value The value to abs.
		 * @return	The absolute value of the given value.
		 */
		static abs(value: number): number;
		static sgn(value: number): number;
		/**
		 * Converts a value measured in degrees to radians.
		 * @param	degrees	Degrees value to convert to radians.
		 * @return	The value converted to radians.
		 */
		static toRadians(degrees: number): number;
		/**
		 * Converts a value measured in radians to degrees.
		 * @param	radians	Radians value to convert to degrees.
		 * @return	The value converted to degrees.
		 */
		static toDegrees(radians: number): number;
		/**
		 * Converts a value measured in radians to degrees.
		 * @param	radians	Radians value to convert to degrees.
		 * @return	The value converted to degrees.
		 */
		static parseIntOrThrow(s: string): number;
		/**
		 * Returns a random integer in the range (inclusive).
		 * @param	lower	The lower bound.
		 * @param	upper	The upper bound.
		 * @return	A random integer in the range [lower:upper] inclusive.
		 */
		static random(lower: number, upper: number): number;
		/**
		 * Returns a random array of integers in the range (inclusive).
		 * @param	lower	The lower bound.
		 * @param	upper	The upper bound.
		 * @return	An array of random integers in the range [lower:upper] inclusive.
		 */
		static randomIntArray(length: number, lower: number, upper: number, noRepeat?: boolean): number[];
		static randomRectangle(r: bitmap.Rectangle): {height: number, width: number, x: number, y: number};
		static multiply(a: number[][], b: number[][]): number[][];
		static dist(x: number, y: number): number;
		static urlToBase64(s: string): string;
		/**
		 * Returns a random item from an array.
		 * @param	a	The array to pick a random item from.
		 * @return	A random item from the array.
		 */
		static randomArrayItem<T>(a: T[]): T;
		/**
		 * Returns the smallest and largest items from an array of ints.
		 * @param	a	The array of ints.
		 * @return	The smallest and largest items from the array.
		 */
		static minMaxElements(a: number[]): {max: number, min: number};
	}
}

export namespace bitmap.transformation {
	export type ColorBlendOptions = {
		alpha: bitmap.ColorFilterChannel;
		bitmap: bitmap.Bitmap;
		bitmap2: bitmap.Bitmap;
		blend: bitmap.ColorBlend;
		blue: bitmap.ColorFilterChannel;
		/**
		 * filter declarations by providing a function `fn` that transform colors to colors
		 */
		fn: (c: bitmap.Color, o?: bitmap.ColorFilter) => bitmap.Color;
		green: bitmap.ColorFilterChannel;
		output: bitmap.Bitmap;
		red: bitmap.ColorFilterChannel;
		region: bitmap.Rectangle;
		x: number;
		y: number;
	}
}

export namespace bitmap.transformation {
	export type SepiaFilterOptions = {
		alpha: bitmap.ColorFilterChannel;
		bitmap: bitmap.Bitmap;
		blend: bitmap.ColorBlend;
		blue: bitmap.ColorFilterChannel;
		/**
		 * filter declarations by providing a function `fn` that transform colors to colors
		 */
		fn: (c: bitmap.Color, o?: bitmap.ColorFilter) => bitmap.Color;
		green: bitmap.ColorFilterChannel;
		output: bitmap.Bitmap;
		red: bitmap.ColorFilterChannel;
		region: bitmap.Rectangle;
		sepiaIntensity: number;
		x: number;
		y: number;
	}
}

export namespace bitmap.transformation {
	/**
	 * Applies a linear transformation (a * value + c) on each channel (red, green, blue, alpha) .
	 */
	export type ColorFilterOptions = {
		alpha: bitmap.ColorFilterChannel;
		bitmap: bitmap.Bitmap;
		blend: bitmap.ColorBlend;
		blue: bitmap.ColorFilterChannel;
		/**
		 * filter declarations by providing a function `fn` that transform colors to colors
		 */
		fn: (c: bitmap.Color, o?: bitmap.ColorFilter) => bitmap.Color;
		green: bitmap.ColorFilterChannel;
		output: bitmap.Bitmap;
		red: bitmap.ColorFilterChannel;
		region: bitmap.Rectangle;
		x: number;
		y: number;
	}
}

export namespace bitmap.transformation {
	export class Colors {
		constructor(b: bitmap.Bitmap);
		blend(o: bitmap.transformation.ColorBlendOptions): void;
		/**
		 * Applies a linear transformation (a * value + c) on each channel (red, green, blue, alpha) .
		 */
		filter(o: bitmap.transformation.ColorFilterOptions): bitmap.Bitmap;
		/**
		 * transform each channel to the closer gray to each of them.
		 */
		grayScale(o: bitmap.transformation.ColorFilterOptions): bitmap.Bitmap;
		sepia(o: bitmap.transformation.SepiaFilterOptions): bitmap.Bitmap;
	}
}export namespace bitmap {export var Color:any; export type Color=any}