from sqlalchemy import text

from app.database.database import engine

try:
    with engine.connect() as conn:
        conn.execute(text("SELECT 1"))
        print("✅ Connected to Supabase successfully!")
except Exception as e:
    print("❌ Connection failed")
    print(e)