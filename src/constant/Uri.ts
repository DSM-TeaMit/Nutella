import URI from "../class/URI";

const projectUuid = "projectUuid";
const userUuid = "userUuid";
const commentUuid = "commentUuid";
const imageUuid = "imageUuid";
const adminUuid = "adminUuid";

type ProjectUuid = typeof projectUuid;
type UserUuid = typeof userUuid;
type CommentUuid = typeof commentUuid;
type ImageUuid = typeof imageUuid;
type AdminUuid = typeof adminUuid;

const Uri = {
  refresh: new URI(`auth/refresh`),
  googleCallback: new URI(`auth/callback-google`),
  githubCallback: new URI(`auth/callback-github`),
  login: new URI(`auth/uidlogin`),
  register: new URI(`auth/register-admin`),
  defaultInfomation: new URI(`user/register`),
  user: new URI(`user`),
  myProfile: new URI(`user/profile`),
  myProjects: new URI(`user/profile/projects`),
  myReports: new URI(`user/profile/reports`),
  userProfile: new URI<UserUuid>(`user/profile/{${userUuid}}`),
  userProject: new URI<UserUuid>(`user/profile/{${userUuid}}/projects`),
  userReports: new URI<UserUuid>(`user/profile/{${userUuid}}/reports`),
  eachUserReports: new URI<UserUuid>(`user/profile/{${userUuid}}/reports/each`),
  eachMyReports: new URI(`user/profile/reports/each`),
  changeGithubId: new URI(`user/profile/githubId`),
  plan: new URI<ProjectUuid>(`project/{${projectUuid}}/plan`),
  submitPlan: new URI<ProjectUuid>(`project/{${projectUuid}}/plan/submit`),
  result: new URI<ProjectUuid>(`project/{${projectUuid}}/report`),
  submitResult: new URI<ProjectUuid>(`project/{${projectUuid}}/report/submit`),
  newProject: new URI(`project`),
  project: new URI<ProjectUuid>(`project/{${projectUuid}}`),
  projectConfirm: new URI<ProjectUuid>(`project/{${projectUuid}}/confirm`),
  projectList: new URI(`project/feed`),
  projectSearch: new URI(`project/feed/search`),
  projectSearchType: new URI(`project/feed/search/each`),
  projectComment: new URI<ProjectUuid>(`comment/{${projectUuid}}`),
  removeComment: new URI<CommentUuid>(`comment/{${commentUuid}}`),
  uploadImage: new URI<ProjectUuid>(`file/{${projectUuid}}/image`),
  downloadImage: new URI<ProjectUuid | ImageUuid>(
    `file/{${projectUuid}}/image/{${imageUuid}}`
  ),
  file: new URI<ProjectUuid>(`file/{${projectUuid}}/archive`),
  pendingReport: new URI(`project/feed/pending`),
  createdAccount: new URI(`admin/createdByRequestor`),
  header: new URI(`user/header`),
  admin: new URI<AdminUuid>(`admin/{${adminUuid}}`),
  searchUser: new URI(`user/search`),
} as const;

export default Uri;
