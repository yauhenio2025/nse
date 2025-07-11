export interface Field {
  id: string;
  name: string;
  icon: string;
  description: string;
  shortCode: string;
}

export interface UploadedFile {
  name: string;
  size: string;
  type: string;
  author?: string;
}

export interface Module {
  id: string;
  title: string;
  description: string;
  tags: string[];
}

export interface FieldData {
  files: UploadedFile[];
  modules: Module[];
  uploadHeader: string;
  uploadSubheader: string;
  modulesHeader: string;
  modulesSubheader: string;
  schemaHeader: string;
  deployHeader: string;
  deploySubheader: string;
  launchText: string;
  componentPath: string;
}

export interface SchemaContent {
  coreConcepts: string[];
  learningProgressions: string[];
  interactiveElements: string[];
  dynamicMechanisms?: string[];
  policyFramework?: string[];
}