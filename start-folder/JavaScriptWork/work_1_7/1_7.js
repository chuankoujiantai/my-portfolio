const form = document.getElementById("searchForm");
const keyword = document.getElementById("keyword");
const message = document.getElementById("message");
const results = document.getElementById("results");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const query = keyword.value.trim();

    results.innerHTML = "";

    if (query === "") {
        message.textContent = "キーワードを入力してください。";
        return;
    }

    message.textContent = "検索中...";

    try {
        const response = await fetch(
            `https://api.github.com/search/repositories?q=${encodeURIComponent(query)}&per_page=10`
        );

        if (!response.ok) {
            throw new Error("検索に失敗しました");
        }

        const data = await response.json();

        if (data.items.length === 0) {
            message.textContent = "検索結果がありません。";
            return;
        }

        message.textContent = `${data.total_count}件ヒットしました（最大10件表示）`;

        data.items.forEach((repo) => {
            const li = document.createElement("li");
            const link = document.createElement("a");
            const description = document.createElement("p");

            link.href = repo.html_url;
            link.textContent = repo.full_name;
            link.target = "_blank";
            link.rel = "noopener noreferrer";

            description.textContent =
                repo.description || "説明なし";

            li.appendChild(link);
            li.appendChild(description);
            results.appendChild(li);
        });

    } catch (error) {
        message.textContent = "検索に失敗しました。";
        console.error(error);
    }
});