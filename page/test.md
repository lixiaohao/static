mongodb操作语句
============================
* 去重
```
  db.getCollection('web_miner_tracks').distinct("data.corporationUrl",{"data.dataSourceType":"madeInChina.wheel.corporationUrl"})
```
* 模糊查询
```
db.getCollection('web_data_corporation').find({"data.id":{$regex:"dummy://"}})
或者在查询字段左右各加一个斜杠(/)
db.getCollection('web_data_corporation').find({"data.id":/dummy:/})

```