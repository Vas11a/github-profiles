

export type userObTypes = {
  login: string;
  avatar_url: string;
  html_url: string;
  repos_url: string;
  name: string | null;
  company: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  public_repos: number;
  updated_at: string;
  followers: number;
};

export type RepoType = {
  name: string;
  html_url: string;
  description: string | null;
  updated_at: string;
  id: number;
};


export type typeLang = {
  language: string;
  languageOb: {
    leftBar: string[];
    mainTitles: string[];
    form: string[];
    errors: string;
    profile: {
      name: string;
      company: string;
      location: string;
      email: string;
      followers: string;
      repos: string;
      getReposs: string;
      hideRepos: string;
    };
    repo: string;
  };
};