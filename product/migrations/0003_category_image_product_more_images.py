# Generated by Django 4.2.17 on 2025-01-05 14:57

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('product', '0002_alter_product_discount_price'),
    ]

    operations = [
        migrations.AddField(
            model_name='category',
            name='image',
            field=models.ImageField(blank=True, null=True, upload_to='category_price/'),
        ),
        migrations.AddField(
            model_name='product',
            name='more_images',
            field=models.ImageField(blank=True, null=True, upload_to='products/'),
        ),
    ]
