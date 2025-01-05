from django.shortcuts import render, redirect, get_object_or_404
from .models import Product, Category

# Create your views here.

def home(request):
    products = Product.objects.all()
    category = Category.objects.all()
    product_with_discount = []

    for product in products:
        discount = product.discount_price if product.discount_price else 0
        price_after_discount = round(product.price * (1 - (discount/100)))
        product_with_discount.append({
            'product': product,
            'price_after_discount': int(price_after_discount),
        })

    context = {
        'category': category,
        'product_with_discount': product_with_discount,
    }
    return render(request, 'index.html', context)
