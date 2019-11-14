<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:template match="/">
    <html>
      <head>
        <meta charset="UTF-8"/>
        <title></title>
        <link rel="stylesheet" type="text/css" href="1.css"/>
      </head>
      <body>
        <div id="volver">
          <a href="index.xml" style="color:white;">⌂</a>
        </div>


          <ul id="lateral">
            <xsl:for-each select="root/row">

            <li><a href="{id}.xml"><xsl:value-of select="Artista"/></a></li>
            </xsl:for-each>
          </ul>


        <xsl:for-each select="root/row[10]">
          <div id="barra"> <span id="{id}.xml">

            <xsl:value-of select="Titol"/></span>
            <div id="right">

              <xsl:value-of select="Artista"/>

              <xsl:value-of select="Dia"/>

              <xsl:value-of select="Lloc"/>

            </div>
          </div>
          <div id="cartel" style="background-image:url({image}); background-size:cover; background repeat: no-repeat;"></div>
          <div id="desc">
            <div id="righto">
            <xsl:value-of select="Titol"/>
            </div>
            <div id="lefto">
            <xsl:value-of select="Descripcio"/>
            </div>
            </div>
        </xsl:for-each>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>
