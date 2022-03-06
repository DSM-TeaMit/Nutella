import URI from "../class/URI";

const projectUuid = "projectUuid";
const userUuid = "userUuid";
const commentUuid = "commentUuid";
const imageUuid = "imageUuid";

type ProjectUuid = typeof projectUuid;
type UserUuid = typeof userUuid;
type CommentUuid = typeof commentUuid;
type ImageUuid = typeof imageUuid;

const Uri = {
  refresh: new URI(`auth/refresh`),
  googleCallback: new URI(`auth/callback-google`),
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
  projectSearch: new URI(`project/feed/search`),
  projectList: new URI(`project/feed`),
  projectComment: new URI<ProjectUuid>(`comment/{${projectUuid}}`),
  removeComment: new URI<CommentUuid>(`comment/{${commentUuid}}`),
  uploadImage: new URI<ProjectUuid>(`file/{${projectUuid}}/image`),
  downloadImage: new URI<ProjectUuid | ImageUuid>(
    `file/{${projectUuid}}/image/{${imageUuid}}`
  ),
  file: new URI<ProjectUuid>(`file/{${projectUuid}}/archive`),
  pendingReport: new URI(`project/feed/pending`),
} as const;

export default Uri;
