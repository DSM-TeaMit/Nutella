type ErrorType = "NO_TOKEN" | "EXPIRED_TOKEN" | "NETWORK_ERROR";

const messageMap = new Map<ErrorType, string>()
  .set("NO_TOKEN", "로그인이 필요합니다.")
  .set("EXPIRED_TOKEN", "로그인이 만료되었습니다. 다시 로그인 해주세요.")
  .set("NETWORK_ERROR", "연결 실패했습니다. 다시 로그인 해주세요.");

class RefreshError extends Error {
  constructor(type: ErrorType) {
    super(messageMap.get(type)!);
    this.name = "RefreshError";
  }
}

export default RefreshError;
