// コメント記入日（createdAt: "2025-07-24T06:30:00.000Z"）から何分前かを算出する
export const formatTimeAgo = (createdAt: string): string => {
  const created = new Date(createdAt);
  const now = new Date();
  const diffMs = now.getTime() - created.getTime(); // 現在と作成日の差をミリ秒で計算
  const diffMinutes = Math.floor(diffMs / 1000 / 60); // 分に変換
  const diffHours = Math.floor(diffMinutes / 60); // 時間に変換
  const diffDays = Math.floor(diffHours / 24); // 日に変換

  // 何分前、何時間前、何日前かを返す（2以上の時は複数形）
  if (diffMinutes < 1) return "just now";
  if (diffMinutes < 60)
    return `${diffMinutes} min${diffMinutes === 1 ? "" : "s"} ago`;
  if (diffHours < 24)
    return `${diffHours} hour${diffHours === 1 ? "" : "s"} ago`;
  return `${diffDays} day${diffDays === 1 ? "" : "s"} ago`;
};
