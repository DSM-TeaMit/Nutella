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
  login: new URI(`auth/uidlogin`),
  register: new URI(`auth/register-admin`),
  defaultInfomation: new URI(`user/register`),
  user: new URI(`user`),
  userProfile: new URI(`user/profile`),
  userProject: new URI<UserUuid>(`user/profile/{${userUuid}}/projects`),
  userReports: new URI<UserUuid>(`user/profile/{${userUuid}}/reports`),
  changeGithubId: new URI(`user/profile/githubId`),
  plan: new URI<ProjectUuid>(`project/{${projectUuid}}/plan`),
  submitPlan: new URI<ProjectUuid>(`project/{${projectUuid}}/plan/submit`),
  report: new URI<ProjectUuid>(`project/{${projectUuid}}/report`),
  submitReport: new URI<ProjectUuid>(`project/{${projectUuid}}/report/submit`),
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
  file: `file/{uuid}/archive`,
};

export default Uri;
