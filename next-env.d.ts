/// <reference types="next" />
/// <reference types="next/types/global" />

interface NavItem {
	path: string;
	name: string;
	dropDown?: {
		path: string;
		name: string;
	}[];
}

type NavItems = NavItem[];

interface TimelineItem {
	title: string;
	description: string;
	date: string;
	extraEl?: JSX.Element;
}

type TimelineItems = TimelineItem[];

declare module "*.svg";

interface PostMetadata {
	date: string;
	id: string;
	title: string;
}

interface PostMetadataWithHtml extends PostMetadata {
	contentHtml: string;
}
