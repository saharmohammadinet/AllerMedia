import { Story } from "../interface/Story";

export function sortStories(arr: Story[]): Story[] {
  const sorted = arr.slice().sort(function (firstUser, secondUser) {
    if (firstUser.score > secondUser.score) return 1;
    if (firstUser.score < secondUser.score) return -1;
    return 0;
  });

  return sorted;
}
