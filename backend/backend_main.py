from fastapi import FastAPI, Query
from fastapi.middleware.cors import CORSMiddleware
import mysql.connector
from typing import List, Optional

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db_config = {
    'host': 'localhost',
    'user': 'root',
    'password': 'zxc88995200',
    'database': 'ramen_db'
}

@app.get("/api/ramen")
async def get_ramen_shops(taste: Optional[str] = None, region: Optional[str] = None, mrt_station: Optional[str] = None):
    conn = mysql.connector.connect(**db_config)
    cursor = conn.cursor()

    query = "SELECT id, name, taste, region, mrt_station, lat, lng FROM ramen_shops WHERE 1=1"
    params = []

    if taste:
        query += " AND taste = %s"
        params.append(taste)
    if region:
        query += " AND region = %s"
        params.append(region)
    if mrt_station:
        query += " AND mrt_station = %s"
        params.append(mrt_station)

    cursor.execute(query, tuple(params))
    results = cursor.fetchall()
    conn.close()

    ramen_shops = [
        {
            'id': row[0],
            'name': row[1],
            'taste': row[2],
            'region': row[3],
            'mrt_station': row[4],
            'lat': row[5],
            'lng': row[6]
        }
        for row in results
    ]

    return ramen_shops

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
