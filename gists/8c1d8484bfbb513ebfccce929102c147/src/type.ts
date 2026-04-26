declare global {
	var showOpenFilePicker: (arg: any) => Promise<FileSystemFileHandle[]>
	class FileSystemObserver {
		constructor(...args: any[])
		[key: string]: any
	}
	interface RegExpConstructor {
		escape(str: string): string
	}
}
