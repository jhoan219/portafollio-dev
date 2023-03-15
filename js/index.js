'use strict';
import { fetchReadJhoanLabra } from './services/fetchApi.js';
import header from './header.js';
import profile from './profile.js';
import experiences from './experiences.js';
import projects from './projects.js';
import skills from './skills.js';
import footer from './footer.js';

const documentReady = async () => {
  const jhoanlabraData = await fetchReadJhoanLabra();
  header();
  profile(jhoanlabraData);
  experiences(jhoanlabraData);
  projects(jhoanlabraData);
  skills(jhoanlabraData);
  footer(jhoanlabraData);
};

document.addEventListener('DOMContentLoaded', documentReady);