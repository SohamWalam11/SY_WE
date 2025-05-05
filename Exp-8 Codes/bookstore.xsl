<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="html" encoding="UTF-8"/>

  <xsl:template match="/">
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            padding: 20px;
          }
          h2 {
            color: #333;
          }
          .book-container {
            margin-bottom: 15px;
            background-color: #fff;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 8px;
            width: 300px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }
          .book-container label {
            font-weight: bold;
            display: block;
            margin-bottom: 6px;
            color: #0073e6;
          }
          select {
            width: 100%;
            padding: 6px;
            font-size: 14px;
            border-radius: 5px;
            border: 1px solid #ccc;
          }
        </style>
      </head>
      <body>
        <h2>Book List</h2>
        <xsl:for-each select="bookstore/book">
          <div class="book-container">
            <label>
              <xsl:value-of select="title"/>
            </label>
            <select>
              <option>Author: <xsl:value-of select="author"/></option>
              <option>Year: <xsl:value-of select="year"/></option>
              <option>Price: $<xsl:value-of select="price"/></option>
            </select>
          </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>

</xsl:stylesheet>
