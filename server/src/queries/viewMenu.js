module.exports = {
    selectAll: `
        SELECT
            main.id
            , mst.app_name
            , mst.feature_name
            , mst.origin
            , mst.path
        FROM webbubblesheet.mst_menu AS main
        INNER JOIN global_mst.mst_menu AS mst
            ON main.global_menu_id = mst.id
        ORDER BY main.sort_order
    `
}
