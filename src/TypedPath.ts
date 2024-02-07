/**
 * This library applies the concept of branding to system paths. It relies on Typescript's type-checking capabilities to make system paths safer!
 *
 * Why ?
 *
 * With TypedPath, make it clear what path is expected by each function.
 *
 * Some functions accept a general path, like fs.stat. Others require that path to be a file path, like fs.readFile. Others need a folder path, like fs.readdir. Sometimes, you write a function that needs to receive an absolute file path, or even a real absolute file path, for instance because you use one of the path segments, or because you compare this path with another AbsoluteFilePath.
 *
 * Paths types
 *
 * A path has a link type (`symbolic, `real`). Note that some relative paths can be viewed has both `symbolic` and `real`.
 *
 * A path has a target type (`file`, `folder`).
 *
 * A path has a position type (`absolute`, `relative`, `fragment`). `relative` means `relative to the current working directory`. `fragment` means relative to another directory. It is usually used to represent path fragments that will be joined together to make an `absolute` or `relative` path. A filename for instance would be an `FilePathFragment`.
 *
 */

const moduleTag = '@mjljm/js-lib/TypedPath/';

const TypeId = `${moduleTag}TypeId`;
type TypeId = typeof TypeId;
const LinkTypeId = `${moduleTag}LinkTypeId`;
type LinkTypeId = typeof LinkTypeId;
const PositionTypeId = `${moduleTag}PositionTypeId`;
type PositionTypeId = typeof PositionTypeId;
const TargetTypeId = `${moduleTag}TargetTypeId`;
type TargetTypeId = typeof TargetTypeId;

export type PathLinkType = 'real' | 'symbolic';
export type PathPositionType = 'absolute' | 'relative' | 'fragment';
export type PathTargetType = 'file' | 'folder';

/**
 * Model
 * */

export type TypedPath<L extends PathLinkType, P extends PathPositionType, T extends PathTargetType> = string & {
	[TypeId]: TypeId;
} & { [LinkTypeId]: L } & { [PositionTypeId]: P } & { [TargetTypeId]: T };

export type Path = TypedPath<PathLinkType, PathPositionType, PathTargetType>;
export type ResolvablePath = TypedPath<PathLinkType, 'absolute' | 'relative', PathTargetType>;
export type AbsoluteFilePath = TypedPath<PathLinkType, 'absolute', 'file'>;
export type AbsoluteFolderPath = TypedPath<PathLinkType, 'absolute', 'folder'>;
export type AbsolutePath = TypedPath<PathLinkType, 'absolute', PathTargetType>;
export type RelativeFilePath = TypedPath<PathLinkType, 'relative', 'file'>;
export type RelativeFolderPath = TypedPath<PathLinkType, 'relative', 'folder'>;
export type RelativePath = TypedPath<PathLinkType, 'relative', PathTargetType>;
export type ResolvableFilePath = TypedPath<PathLinkType, 'absolute' | 'relative', 'file'>;
export type ResolvableFolderPath = TypedPath<PathLinkType, 'absolute' | 'relative', 'folder'>;
export type FilePathFragment = TypedPath<PathLinkType, 'fragment', 'file'>;
export type FolderPathFragment = TypedPath<PathLinkType, 'fragment', 'folder'>;
export type RealAbsoluteFilePath = TypedPath<'real', 'absolute', 'file'>;
export type RealAbsoluteFolderPath = TypedPath<'real', 'absolute', 'folder'>;
export type ResolvableSymbolicPath = TypedPath<'symbolic', 'absolute' | 'relative', PathTargetType>;
export type ResolvableRealPath = TypedPath<'real', 'absolute' | 'relative', PathTargetType>;
export type PathFragment = TypedPath<PathLinkType, 'fragment', PathTargetType>;

/**
 * Utility types
 */
export type PathLink<G extends Path> = G extends TypedPath<infer L, PathPositionType, PathTargetType> ? L : never;
export type PathPosition<G extends Path> = G extends TypedPath<PathLinkType, infer P, PathTargetType> ? P : never;
export type PathTarget<G extends Path> = G extends TypedPath<PathLinkType, PathPositionType, infer T> ? T : never;

export type ToFile<G extends Path> =
	G extends TypedPath<infer L, infer P, PathTargetType> ? TypedPath<L, P, 'file'> : never;

export type ToFolder<G extends Path> =
	G extends TypedPath<infer L, infer P, PathTargetType> ? TypedPath<L, P, 'folder'> : never;

/**
 * Unsafe constructors
 */

const unsafeTypedPath = <L extends PathLinkType, P extends PathPositionType, T extends PathTargetType>(
	p: string
): TypedPath<L, P, T> => p as TypedPath<L, P, T>;

export const unsafeAbsoluteFilePath = unsafeTypedPath<PathLinkType, 'absolute', 'file'>;
export const unsafeAbsoluteFolderPath = unsafeTypedPath<PathLinkType, 'absolute', 'folder'>;
export const unsafeRelativeFilePath = unsafeTypedPath<PathLinkType, 'relative', 'file'>;
export const unsafeRelativeFolderPath = unsafeTypedPath<PathLinkType, 'relative', 'folder'>;
export const unsafeFilePathFragment = unsafeTypedPath<PathLinkType, 'fragment', 'file'>;
export const unsafeFolderPathFragment = unsafeTypedPath<PathLinkType, 'fragment', 'folder'>;
export const unsafeRealAbsoluteFilePath = unsafeTypedPath<'real', 'absolute', 'file'>;
export const unsafeRealAbsoluteFolderPath = unsafeTypedPath<'real', 'absolute', 'folder'>;
